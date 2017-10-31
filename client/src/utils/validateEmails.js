const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        .filter(email => re.test(email) === false && email.trim() !== '');
    if (invalidEmails.length) {
        const sentence = invalidEmails.length > 1
            ? 'These email addresses are invalid: '
            : 'This email address is invalid: ';
        return `${sentence}${invalidEmails}`
    }
    return;
};