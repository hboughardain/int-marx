package com.example.demo.controller;

import com.example.demo.repository.CoherencyReportRepository;
import com.example.demo.model.CoherencyReport;
import java.util.ArrayList;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.example.demo.utility.CsvToJson.convertCsvToJson;
import static com.example.demo.utility.CsvToJson.convertJsonToList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class CoherencyReportController {
    @Autowired
    CoherencyReportRepository coherencyReportRepository;

    @GetMapping("/coherencyReports")
    public ResponseEntity<List<CoherencyReport>> getAllCoherencyReports() {
        //System.out.println(convertJsonToList(convertCsvToJson("C:/Users/bvp0101/OneDrive - INFRABEL/Documents/Marx/CoherencyReports/2023-08-25-12-25/coherencyReport.csv")));
        try {
            List<CoherencyReport> coherencyReports = new ArrayList<>();
            coherencyReportRepository.findAll().forEach(coherencyReports::add);
            if (coherencyReports.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(coherencyReports, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/coherencyReports/{id}")
    public ResponseEntity<CoherencyReport> getCoherencyReportById(@PathVariable("id") Integer id) {
        Optional<CoherencyReport> coherencyReportData = coherencyReportRepository.findById(id);

        if (coherencyReportData.isPresent()) {
            return new ResponseEntity<>(coherencyReportData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/coherencyReports")
    public ResponseEntity<CoherencyReport> createCoherencyReport(@RequestBody CoherencyReport coherencyReport) {
        try {
            CoherencyReport _coherencyReport = coherencyReportRepository.save(new CoherencyReport(
                    coherencyReport.getSerZone(),
                    coherencyReport.getType(),
                    coherencyReport.getTag(),
                    coherencyReport.getDescription(),
                    coherencyReport.getComment()));
            return new ResponseEntity<>(_coherencyReport, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/coherencyReports/batch")
    //TODO: adapt with front-end implementation to enable processing of any specified .csv file
    //public ResponseEntity<List<CoherencyReport>> createCoherencyReportsFromFile(@RequestBody List<CoherencyReport> coherencyReports) {
    public ResponseEntity<List<CoherencyReport>> createCoherencyReportsFromFile() {
        List<CoherencyReport> coherencyReports = convertJsonToList(convertCsvToJson("C:/Users/bvp0101/OneDrive - INFRABEL/Documents/Marx/CoherencyReports/2023-08-25-12-25/coherencyReport.csv"));
        List<CoherencyReport> createdReports = new ArrayList<>();
        try {
            for (CoherencyReport report : coherencyReports) {
                ResponseEntity<CoherencyReport> response = createCoherencyReport(report);
                if (response.getStatusCode() == HttpStatus.CREATED) {
                    createdReports.add(response.getBody());
                }
            }
            return new ResponseEntity<>(createdReports, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/coherencyReports/{id}")
    public ResponseEntity<CoherencyReport> updateCoherencyReport(@PathVariable("id") Integer id, @RequestBody CoherencyReport coherencyReport) {
        Optional<CoherencyReport> coherencyReportData = coherencyReportRepository.findById(id);

        if (coherencyReportData.isPresent()) {
            CoherencyReport _coherencyReport = coherencyReportData.get();
            if (coherencyReport.getSerZone() != null) _coherencyReport.setSerZone(coherencyReport.getSerZone());
            if (coherencyReport.getType() != null) _coherencyReport.setType(coherencyReport.getType());
            if (coherencyReport.getTag() != null) _coherencyReport.setTag(coherencyReport.getTag());
            if (coherencyReport.getDescription() != null) _coherencyReport.setDescription(coherencyReport.getDescription());
            if (coherencyReport.getComment() != null) _coherencyReport.setComment(coherencyReport.getComment());
            return new ResponseEntity<>(coherencyReportRepository.save(_coherencyReport), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/coherencyReports/{id}")
    public ResponseEntity<HttpStatus> deleteCoherencyReport(@PathVariable("id") Integer id) {
        try {
            coherencyReportRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/coherencyReports")
    public ResponseEntity<HttpStatus> deleteAllCoherencyReports() {
        try {
            coherencyReportRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
