# Notifications
Every time that an event is recorded in Larahawk, a notification is sent out to a variety of channels that you can set in the [account settings](https://app.larahawk.com/settings) area. Most of these notifications also contain some helpful information about the event (level, message, device info) to help you get a quick glimpse at what the issue might be. Additionally, there's a link included in each notification that sends you directly to the full event details page on Larahawk.

Right now, there are three different notifications that you can receive, with a fourth being developed. Details for each, including how to get them set up, are as follows.

## Slack
To enable Slack notifications on Larahawk, click the **Add to Slack** button which starts the authentication process. You'll be asked to select which channel you want Larahawk to post in, and then redirected back to the settings page once the process has completed.

## Email
Email notifications will be sent to the email that you used while creating your account. To ensure deliverability, please make sure that `hello@larahawk.com` is in your company or web server's email/spam whitelist.

## Text Messaging
Text message (SMS) notifications can be activated by selecting the appropriate country code and entering in a 10-digit phone number that you would like to receive notifications to. Messages are sent via the Twilio API and will be coming from the phone number **+1 (321) 323-3990**.

## Webhooks (coming soon)
Custom URL endpoints and webhooks are currently in development and coming soon!