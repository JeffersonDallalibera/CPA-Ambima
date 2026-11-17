import os
import smtplib
from email.message import EmailMessage

SMTP_HOST = os.environ.get("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
SMTP_EMAIL = os.environ.get("SMTP_EMAIL", "")
SMTP_APP_PASSWORD = os.environ.get("SMTP_APP_PASSWORD", "")


def send_email(to_email: str, subject: str, html_body: str) -> bool:
    if not SMTP_EMAIL or not SMTP_APP_PASSWORD:
        print(f"[MAILER DEV MODE] Para={to_email} | Assunto={subject}")
        return False

    msg = EmailMessage()
    msg["Subject"] = subject
    msg["From"] = f"CPA Pro Mastery <{SMTP_EMAIL}>"
    msg["To"] = to_email
    msg.set_content("Use um cliente de e-mail compatível com HTML.")
    msg.add_alternative(html_body, subtype="html")

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as server:
        server.starttls()
        server.login(SMTP_EMAIL, SMTP_APP_PASSWORD)
        server.send_message(msg)
    return True
