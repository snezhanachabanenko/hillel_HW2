// Your company object
const company = {
    name: 'Big Company',
    type: 'Main company',
    platform: 'Ticket selling platform',
    sellsSolution: 'Ticket selling solution',
    clients: [
        // ... (your data)
    ]
};

// Your findValueByKey function
function findValueByKey(company, companyName) {
    if (company.name === companyName) {
        // Found the desired company, return information about it
        return {
            name: company.name,
            type: company.type,
            uses: company.uses,
            sells: company.sells,
        };
    } else if (company.clients && company.clients.length > 0) {
        // Search among clients
        for (const client of company.clients) {
            const result = findValueByKey(client, companyName);
            if (result) {
                // Found inside a client, return the result
                return result;
            }
        }
    }

    // Company not found, return null
    return null;
}

// Example of usage
const companyNameToFind = 'Client 1.2.3';
const result = findValueByKey(company, companyNameToFind);

if (result) {
    console.log(`Information about the company ${companyNameToFind}:`, result);
} else {
    console.log(`Company ${companyNameToFind} not found.`);
}
