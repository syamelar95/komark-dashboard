import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Table, Thead, Tbody, Tr, Th, Td, Heading, Flex } from '@chakra-ui/react';

function App() {
    const [ecsData, setEcsData] = useState([]);
    const [ecsHeaders, setEcsHeaders] = useState([]);
    const [em1Data, setEm1Data] = useState([]);
    const [em1Headers, setEm1Headers] = useState([]);
    const [em2Data, setEm2Data] = useState([]);
    const [em2Headers, setEm2Headers] = useState([]);
    const [kp13Data, setKp13Data] = useState([]);
    const [kp13Headers, setKp13Headers] = useState([]);
    const [kp8Data, setKp8Data] = useState([]);
    const [kp8Headers, setKp8Headers] = useState([]);
    const [iwaData, setIwaData] = useState([]);
    const [iwaHeaders, setIwaHeaders] = useState([]);
    const [sonData, setSonData] = useState([]);
    const [sonHeaders, setSonHeaders] = useState([]);
    const [hp1Data, setHp1Data] = useState([]);
    const [hp1Headers, setHp1Headers] = useState([]);
    const [hp2Data, setHp2Data] = useState([]);
    const [hp2Headers, setHp2Headers] = useState([]);
    const [rhyguanData, setRhyguanData] = useState([]);
    const [rhyguanHeaders, setRhyguanHeaders] = useState([]);
    const [laserData, setLaserData] = useState([]);
    const [laserHeaders, setLaserHeaders] = useState([]);
    const [gl4Data, setGl4Data] = useState([]);
    const [gl4Headers, setGl4Headers] = useState([]);
    const [gravureData, setGravureData] = useState([]);
    const [gravureHeaders, setGravureHeaders] = useState([]);
    const [laminationData, setLaminationData] = useState([]);
    const [laminationHeaders, setLaminationHeaders] = useState([]);
    const [utecoData, setUtecoData] = useState([]);
    const [utecoHeaders, setUtecoHeaders] = useState([]);
    const [bagMakingData, setBagMakingData] = useState([]);
    const [bagMakingHeaders, setBagMakingHeaders] = useState([]);



    const [currentClass, setCurrentClass] = useState('schedule-1');
    const classList = ['schedule-1', 'schedule-2', 'schedule-3', 'schedule-4'];
    const intervalTime = 20000; // 20 seconds




    const excelDateToJSDate = (serial) => {
        const daysSince1900 = serial - 1; // Excel's date system starts at 1, subtracting 1 to convert it to zero-based days
        const startDate = new Date(1900, 0, 1); // January 1, 1900
        const jsDate = new Date(startDate.setDate(startDate.getDate() + daysSince1900));
        return jsDate.toLocaleDateString('en-UK'); // Convert to short date format
    };

    const processData = useCallback((rawData, columnsToShow) => {
        if (rawData.length < 6) {
            return [];
        }

        // Extract headers from the 4th row (index 3)
        const headers = rawData[3];

        // Map the rest of the data after the first 5 rows
        let data = rawData.slice(5).map(row => {
            const rowData = {};
            Object.keys(headers).forEach((key, index) => {
                let cellValue = row[Object.keys(row)[index]];
                if (headers[key] === 'Required Delivery Date' && !isNaN(cellValue)) {
                    cellValue = excelDateToJSDate(cellValue); // Convert serial date to short date format
                }
                rowData[headers[key]] = cellValue;
            });
            return rowData;
        });

        // Filter out rows where any of the desired columns are empty
        data = data.filter(row =>
            columnsToShow.every(col =>
                row[col] !== undefined && row[col] !== null && row[col].toString().trim() !== ''
            )
        );

        // Keep only columns that are in columnsToShow
        data = data.map(row => {
            const filteredRow = {};
            columnsToShow.forEach(col => {
                filteredRow[col] = row[col] !== undefined ? row[col] : '';
            });
            return filteredRow;
        });

        return data;
    }, []);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/ecs')
            .then(response => {
                console.log('Raw ECS response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed ECS data:', processedData);
                if (processedData.length > 0) {
                    setEcsHeaders(Object.keys(processedData[0]));
                }
                setEcsData(processedData);
            })
            .catch(error => console.error('Error fetching ECS data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/em1')
            .then(response => {
                console.log('Raw EM1 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed EM1 data:', processedData);
                if (processedData.length > 0) {
                    setEm1Headers(Object.keys(processedData[0]));
                }
                setEm1Data(processedData);
            })
            .catch(error => console.error('Error fetching EM1 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/em2')
            .then(response => {
                console.log('Raw EM2 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed EM2 data:', processedData);
                if (processedData.length > 0) {
                    setEm2Headers(Object.keys(processedData[0]));
                }
                setEm2Data(processedData);
            })
            .catch(error => console.error('Error fetching EM2 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/kp13')
            .then(response => {
                console.log('Raw KP13 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed KP13 data:', processedData);
                if (processedData.length > 0) {
                    setKp13Headers(Object.keys(processedData[0]));
                }
                setKp13Data(processedData);
            })
            .catch(error => console.error('Error fetching KP13 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/kp8')
            .then(response => {
                console.log('Raw KP8 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed KP8 data:', processedData);
                if (processedData.length > 0) {
                    setKp8Headers(Object.keys(processedData[0]));
                }
                setKp8Data(processedData);
            })
            .catch(error => console.error('Error fetching KP13 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/iwa')
            .then(response => {
                console.log('Raw IWA response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed IWA data:', processedData);
                if (processedData.length > 0) {
                    setIwaHeaders(Object.keys(processedData[0]));
                }
                setIwaData(processedData);
            })
            .catch(error => console.error('Error fetching KP13 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/son')
            .then(response => {
                console.log('Raw SONATA response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed SONATA data:', processedData);
                if (processedData.length > 0) {
                    setSonHeaders(Object.keys(processedData[0]));
                }
                setSonData(processedData);
            })
            .catch(error => console.error('Error fetching SONATA data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/gl4')
            .then(response => {
                console.log('Raw gl4 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed gl4 data:', processedData);
                if (processedData.length > 0) {
                    setGl4Headers(Object.keys(processedData[0]));
                }
                setGl4Data(processedData);
            })
            .catch(error => console.error('Error fetching gl4 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/hp1')
            .then(response => {
                console.log('Raw hp1 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed hp1 data:', processedData);
                if (processedData.length > 0) {
                    setHp1Headers(Object.keys(processedData[0]));
                }
                setHp1Data(processedData);
            })
            .catch(error => console.error('Error fetching hp1 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/hp2')
            .then(response => {
                console.log('Raw hp2 response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed hp2 data:', processedData);
                if (processedData.length > 0) {
                    setHp2Headers(Object.keys(processedData[0]));
                }
                setHp2Data(processedData);
            })
            .catch(error => console.error('Error fetching hp2 data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/rhyguan')
            .then(response => {
                console.log('Raw rhyguan response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed hp1 data:', processedData);
                if (processedData.length > 0) {
                    setRhyguanHeaders(Object.keys(processedData[0]));
                }
                setRhyguanData(processedData);
            })
            .catch(error => console.error('Error fetching rhyguan data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/laser')
            .then(response => {
                console.log('Raw laser response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed laser data:', processedData);
                if (processedData.length > 0) {
                    setLaserHeaders(Object.keys(processedData[0]));
                }
                setLaserData(processedData);
            })
            .catch(error => console.error('Error fetching laser data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/uteco')
            .then(response => {
                console.log('Raw uteco response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed uteco data:', processedData);
                if (processedData.length > 0) {
                    setUtecoHeaders(Object.keys(processedData[0]));
                }
                setUtecoData(processedData);
            })
            .catch(error => console.error('Error fetching uteco data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/bagmaking')
            .then(response => {
                console.log('Raw bagmaking response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed bagmaking data:', processedData);
                if (processedData.length > 0) {
                    setBagMakingHeaders(Object.keys(processedData[0]));
                }
                setBagMakingData(processedData);
            })
            .catch(error => console.error('Error fetching bagmaking data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/lamination')
            .then(response => {
                console.log('Raw lamination response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed lamination data:', processedData);
                if (processedData.length > 0) {
                    setLaminationHeaders(Object.keys(processedData[0]));
                }
                setLaminationData(processedData);
            })
            .catch(error => console.error('Error fetching lamination data:', error));
    }, [processData]);

    useEffect(() => {
        axios.get('http://192.168.20.11:5000/gravure')
            .then(response => {
                console.log('Raw gravure response data:', response.data);
                const processedData = processData(response.data, ["NO", "Jobsheet No.", "Description", "Required Delivery Date"]);
                console.log('Processed gravure data:', processedData);
                if (processedData.length > 0) {
                    setGravureHeaders(Object.keys(processedData[0]));
                }
                setGravureData(processedData);
            })
            .catch(error => console.error('Error fetching gravure data:', error));
    }, [processData]);












    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentClass(prevClass => {
                const currentIndex = classList.indexOf(prevClass);
                const nextIndex = (currentIndex + 1) % classList.length;
                return classList[nextIndex];
            });
        }, intervalTime);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, [classList, intervalTime]);


    return (
        <ChakraProvider>
            <Box p={4}>
                {currentClass === 'schedule-1' && (
                    <Flex direction="row" justify="space-between" className="schedule-1">
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">ECS Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {ecsHeaders.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {ecsData.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {ecsHeaders.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">EM1 Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {em1Headers.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {em1Data.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {em1Headers.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">EM2 Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {em2Headers.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {em2Data.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {em2Headers.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">KP13 Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {kp13Headers.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {kp13Data.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {kp13Headers.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>

                </Flex>
                )}
                {currentClass === 'schedule-2' && (
                    <Flex direction="row" justify="space-between" className="schedule-2">
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">KP8 Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {ecsHeaders.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {kp8Data.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {kp8Headers.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">IWASAKI Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {iwaHeaders.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {iwaData.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {em1Headers.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">SONATA Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {sonHeaders.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {sonData.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {sonHeaders.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                    <Box width="25%" border="2px solid black" >
                        <Box mb={4}>
                            <Heading as="h2" size="lg">GALLUS4 Schedule</Heading>
                        </Box>
                        <Box overflowY="auto">
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        {gl4Headers.map((header) => (
                                            <Th key={header}>{header}</Th>
                                        ))}
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {gl4Data.map((row, rowIndex) => (
                                        <Tr key={rowIndex}>
                                            {gl4Headers.map((header, colIndex) => (
                                                <Td key={colIndex}>{row[header]}</Td>
                                            ))}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>

                </Flex>
                )}
                {currentClass === 'schedule-3' && (
                    <Flex direction="row" justify="space-between" className="schedule-3">
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">HP1 Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {ecsHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {hp1Data.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {hp1Headers.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">HP2 Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {hp2Headers.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {hp2Data.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {hp2Headers.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">RHYGUAN Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {rhyguanHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {rhyguanData.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {rhyguanHeaders.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">GOLDEN LASER Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {laserHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {laserData.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {laserHeaders.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>

                    </Flex>
                )}
                {currentClass === 'schedule-4' && (
                    <Flex direction="row" justify="space-between" className="schedule-3">
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">GRAVURE Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {gravureHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {gravureData.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {gravureHeaders.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">LAMINATION Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {laminationHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {laminationData.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {laminationHeaders.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">UTECO Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {utecoHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {utecoData.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {utecoHeaders.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>
                        <Box width="25%" border="2px solid black" >
                            <Box mb={4}>
                                <Heading as="h2" size="lg">BAG MAKING Schedule</Heading>
                            </Box>
                            <Box overflowY="auto">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            {bagMakingHeaders.map((header) => (
                                                <Th key={header}>{header}</Th>
                                            ))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {bagMakingData.map((row, rowIndex) => (
                                            <Tr key={rowIndex}>
                                                {bagMakingHeaders.map((header, colIndex) => (
                                                    <Td key={colIndex}>{row[header]}</Td>
                                                ))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Box>
                        </Box>

                    </Flex>
                )}


            </Box>
        </ChakraProvider>
    );
}

export default App;
