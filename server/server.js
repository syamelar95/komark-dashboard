const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const XLSX = require('xlsx');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to get data from the Excel file
app.get('/data', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[1];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});


app.get('/ecs', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[18];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/em1', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[13];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/em2', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[14];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/kp13', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[11];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/kp8', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[12];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/iwa', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[10];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/son', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[9];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/gl4', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[19];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/hp1', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[16];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/hp2', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[15];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/rhyguan', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[17];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/laser', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[20];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/bagmaking', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[21];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/uteco', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[5];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/gravure', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[1];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});

app.get('/lamination', (req, res) => {
    const filePath = '\\\\192.168.0.57\\Production Schedule Planning\\Production Schedule Planning and Delivery\\PRODUCTION SCHEDULE PLANNING.xlsx';

    try {
        // Read and process the Excel file
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[2];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Remove the first 6 rows
        //if (data.length > 6) {
        //    data = data.slice(3);
        //}

        // Send processed data as response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read the Excel file' });
    }
});












app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
