package com.example.cpumonitorbackend.model;


public class CpuUsageEntry {
    private String timestamp;
    private double value;

    public CpuUsageEntry(String timestamp, double value) {
        this.timestamp = timestamp;
        this.value = value;
    }

    public String getTimestamp() { return timestamp; }
    public double getValue() { return value; }
}

