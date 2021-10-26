const numUniqueEmails = (emails) => {
    let clean = [];
 
    emails.forEach((email) => {
        let local = email.slice(0, email.indexOf('@'));
        const domain = email.slice(email.indexOf('@'));

        if(local.includes("+")) {
           local = local.slice(0, local.indexOf("+"));
        }
        if(local.includes(".")) {
           local = local.replace(/\./g, "");
           //local = local.split(".").join("");
        }

        clean.push(local.concat(domain));
    }); 
        
    return new Set(clean).size;
};