document.addEventListener('DOMContentLoaded', function(){
    //set elements to respond to button clicks
    document.getElementById('studentId').addEventListener('change', fetchStudentRecord);
    document.getElementById('payNow').addEventListener("click", processPayment);

    function fetchStudentRecord() {
        // Simulate fetching student record from a database
        const studentId = document.getElementById('studentId').value;
        if (studentId) {
            // For the sake of this example, we assume the student has an account balance of $1000.00
            const accountBalance = 1000.00;
            document.getElementById('accountBalance').innerText = `$${accountBalance.toFixed(2)}`;
            document.getElementById('studentDetails').style.display = 'block';
        }
    }

//js code for payment processing
    function processPayment() {
        const studentId = document.getElementById('studentId').value;
        const semester = document.getElementById('semester').value;
        const amount = document.getElementById('amount').value;

        if (!studentId || !semester || !amount) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Simulate payment processing
        alert(`Payment of $${amount} for semester ${semester} received from student ID ${studentId}.`);

        // Record the transaction
        recordTransaction(studentId, semester, amount);
    }

    function recordTransaction(studentId, semester, amount) {
        const transactionTable = localStorage.getItem('transactionTable');
        const transactionRow = `${studentId},${semester},${amount}\n`;
        localStorage.setItem('transactionTable', (transactionTable || '') + transactionRow);

        // Redirect to transaction log page
        window.location.href = 'transaction.html';
    }

    //js code that handles transactions
    function loadTransactions() {
        const transactionTable = localStorage.getItem('transactionTable');
        if (transactionTable) {
            const transactions = transactionTable.trim().split('\n');
            const transactionBody = document.getElementById('transactionBody');
            transactions.forEach(transaction => {
                const [studentId, semester, amount] = transaction.split(',');
                const row = document.createElement('tr');

                const studentIdCell = document.createElement('td');
                studentIdCell.textContent = studentId;
                row.appendChild(studentIdCell);

                const semesterCell = document.createElement('td');
                semesterCell.textContent = semester;
                row.appendChild(semesterCell);

                const amountCell = document.createElement('td');
                amountCell.textContent = amount;
                row.appendChild(amountCell);

                transactionBody.appendChild(row);
            });
        }

    }

});

