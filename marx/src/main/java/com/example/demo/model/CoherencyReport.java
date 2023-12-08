package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "coherencyReports")
public class CoherencyReport {
    //TODO: check how to get rid of getters/setters

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "serZone")
    private String serZone;

    @Column(name = "type")
    private String type;

    @Column(name = "tag")
    private String tag;

    @Column(name = "description")
    private String description;

    @Column(name = "comment")
    private String comment;

    private CoherencyReport() {};

    public CoherencyReport(String serZone, String type, String tag, String description, String comment) {
        this.serZone = serZone;
        this.type = type;
        this.tag = tag;
        this.description = description;
        this.comment = comment;
    }

    public Integer getId() {
        return id;
    }

    public String getSerZone() {
        return serZone;
    }

    public void setSerZone(String serZone) {
        this.serZone = serZone;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
