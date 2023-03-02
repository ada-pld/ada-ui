interface InputLabel {
    [key: string]: string;
}

export const inputLabel: InputLabel = {
    "SMTP_HOST": "SMTP Host",
    "SMTP_USER": "SMTP User",
    "SMTP_PORT": "SMTP Port",
    "SMTP_PASSWORD": "SMTP Password",
    "DEFAULT_PASSWORD": "Default password",
    "HOSTNAME": "Hostname",
    "UNDER_MAINTENANCE": "Maintenance mode"
}

export const inputDescription: InputLabel = {
    "SMTP_HOST": "This is the SMTP server host used to send email",
    "SMTP_USER": "This is the SMTP server user",
    "SMTP_PORT": "This is the SMTP server port",
    "SMTP_PASSWORD": "This is the SMTP server password",
    "DEFAULT_PASSWORD": "This is the default password that is used when creating an account without a mail transporter ('password' when empty)",
    "HOSTNAME": "This is the hostname on wich the server runs, used in links and in emails",
    "UNDER_MAINTENANCE": "WAP will be put in maintenance mode and nobody will be able to access it appart from the administrators"
}