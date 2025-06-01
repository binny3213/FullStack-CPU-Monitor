package com.example.cpumonitorbackend.controller;
import com.example.cpumonitorbackend.model.CpuUsageEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;
import com.example.cpumonitorbackend.service.MonitoringService;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class MonitoringController {

    private final MonitoringService monitoringService;

    @Autowired
    public MonitoringController(MonitoringService monitoringService) {
        this.monitoringService = monitoringService;
    }

    @GetMapping("/cpu-usage")
    public List<CpuUsageEntry> getCpuUsage(
            @RequestParam String ip,
            // format "2023-10-01T00:00:00Z"
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
            @RequestParam  String from,
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
            @RequestParam String to,
            @RequestParam int interval
    ) {
        return monitoringService.getCpuUsage(ip, from, to, interval);
    }
}
