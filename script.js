// Import Firebase configuration and Firestore methods
import { db } from './firebase-config.js'; // Import db from firebase-config.js
import { collection, addDoc, getDocs } from "firebase/firestore";

// Select the form and operation list
const scheduleForm = document.getElementById('scheduleForm');
const operationList = document.getElementById('operationList');

// Add operation to Firestore
scheduleForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const doctorName = document.getElementById('doctorName').value;
    const operationDate = document.getElementById('operationDate').value;
    const operationTime = document.getElementById('operationTime').value;
    const operationType = document.getElementById('operationType').value;

    try {
        // Add document to Firestore
        await addDoc(collection(db, 'operations'), {
            patientName,
            doctorName,
            operationDate,
            operationTime,
            operationType
        });
        alert('Operation scheduled successfully!');
        scheduleForm.reset();
        loadOperations();
    } catch (error) {
        console.error('Error adding document: ', error);
    }
});

// Load operations from Firestore
async function loadOperations() {
    operationList.innerHTML = '';

    try {
        const querySnapshot = await getDocs(collection(db, 'operations'));
        querySnapshot.forEach((doc) => {
            const operation = doc.data();
            const li = document.createElement('li');
            li.textContent = `${operation.patientName} - ${operation.doctorName} - ${operation.operationDate} - ${operation.operationTime} - ${operation.operationType}`;
            operationList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching documents: ', error);
    }
}

// Initial load of operations
loadOperations();
