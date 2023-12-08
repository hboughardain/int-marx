package com.example.demo.utility;

import com.example.demo.model.CoherencyReport;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class CsvToJson {
    public static String convertCsvToJson(String csvFilePath) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(csvFilePath));
            String line;
            String[] headers = null;
            JSONArray jsonArray = new JSONArray();

            while ((line = reader.readLine()) != null) {
                if (headers == null) {
                    // Assuming first row is the header
                    headers = line.split(";");
                } else {
                    String[] data = line.split(";");
                    JSONObject obj = new JSONObject();
                    for (int i = 0; i < headers.length; i++) {
                        obj.put(headers[i], data[i]);
                    }
                    jsonArray.put(obj);
                }
            }

            reader.close();
            return jsonArray.toString();
        } catch (IOException e) {
            e.printStackTrace(); // You can modify this to handle the exception gracefully
            return "Error: Unable to read the file.";
        }
    }

    public static List<CoherencyReport> convertJsonToList(String json) {
        List<CoherencyReport> coherencyReports = new ArrayList<>();
        try {
            JSONArray jsonArray = new JSONArray(json);

            for (int i = 0; i < jsonArray.length(); i++) {
                JSONObject jsonObject = jsonArray.getJSONObject(i);
                CoherencyReport coherencyReport = new CoherencyReport(
                        jsonObject.getString("serZone"),
                        jsonObject.getString("type"),
                        jsonObject.getString("tag"),
                        jsonObject.getString("description"),
                        ""
                );
                coherencyReports.add(coherencyReport);
            }
        } catch (Exception e) {
            //TODO: error management
            e.printStackTrace();
        }
        return coherencyReports;
    }
}
