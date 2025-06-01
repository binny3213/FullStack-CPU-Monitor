package com.example.cpumonitorbackend.service;
import com.example.cpumonitorbackend.model.CpuUsageEntry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.cloudwatch.CloudWatchClient;
import software.amazon.awssdk.services.cloudwatch.model.*;
import software.amazon.awssdk.services.ec2.Ec2Client;
import software.amazon.awssdk.services.ec2.model.DescribeInstancesRequest;
import software.amazon.awssdk.services.ec2.model.DescribeInstancesResponse;
import software.amazon.awssdk.services.ec2.model.Filter;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class MonitoringService {

    @Value("${AWS_ACCESS_KEY_ID}")
    private String accessKey;

    @Value("${AWS_SECRET_ACCESS_KEY}")
    private String secretKey;

    public List<CpuUsageEntry> getCpuUsage(String ip, String from, String to, int interval)
    {
        Instant startTime = Instant.parse(from);
        Instant endTime = Instant.parse(to);

        AwsBasicCredentials awsCreds = AwsBasicCredentials.create(accessKey, secretKey);

        String instanceId = getInstanceIdByIp(ip, awsCreds);

        long seconds = Duration.between(startTime, endTime).getSeconds();
        long estimatedPoints = seconds / interval;

        if (estimatedPoints > 1500) {
            throw new IllegalArgumentException("Too many data points. Please increase interval.");
        }

        try (CloudWatchClient cloudWatch = CloudWatchClient.builder()
                .region(Region.US_EAST_1)
                .credentialsProvider(StaticCredentialsProvider.create(awsCreds))
                .build()) {

            GetMetricStatisticsRequest statsRequest = GetMetricStatisticsRequest.builder()
                    .namespace("AWS/EC2")
                    .metricName("CPUUtilization")
                    .dimensions(Dimension.builder().name("InstanceId").value(instanceId).build())
                    .startTime(startTime)
                    .endTime(endTime)
                    .period(interval)
                    .statistics(Statistic.AVERAGE)
                    .build();

            GetMetricStatisticsResponse statsResponse = cloudWatch.getMetricStatistics(statsRequest);

            if (statsResponse.datapoints().isEmpty()) {
                System.out.println("⚠ No CPU data points returned from CloudWatch.");
            }

            List<CpuUsageEntry> results = new ArrayList<>();
            for (Datapoint point : statsResponse.datapoints()) {
                results.add(new CpuUsageEntry(point.timestamp().toString(), point.average()));
            }

            results.sort(Comparator.comparing(CpuUsageEntry::getTimestamp));
            return results;
        }
    }

    private String getInstanceIdByIp(String ip, AwsBasicCredentials awsCreds) {
        try (Ec2Client ec2 = Ec2Client.builder()
                .region(Region.US_EAST_1)
                .credentialsProvider(StaticCredentialsProvider.create(awsCreds))
                .build()) {

            DescribeInstancesRequest request = DescribeInstancesRequest.builder()
                    .filters(Filter.builder().name("private-ip-address").values(ip).build())
                    .build();

            DescribeInstancesResponse response = ec2.describeInstances(request);

            if (response.reservations().isEmpty() || response.reservations().get(0).instances().isEmpty()) {
                throw new IllegalArgumentException("No EC2 instance found for private IP: " + ip);
            }

            String instanceId = response.reservations().get(0).instances().get(0).instanceId();
            System.out.println("✅ Mapped IP " + ip + " to instance ID: " + instanceId);
            return instanceId;
        }
    }
}

