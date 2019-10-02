# Introduction
Welcome! 👋

Larahawk is a simple and powerful error monitoring platform for Laravel apps. After installation and setup, Larahawk watches your application for exceptions thrown and any data written to the log. This is intercepted and sent over to Larahawk where you can view details and a full stack trace of the event. 

Once an event has been recorded, you'll be notified immediately via Slack, Email, or SMS messaging (depending on what you've set up in your account). Slack and Email notifications will have additional information included like the device, OS, or ID of the user who was on your app when the log event occurred.

To get started immediately, you can skip ahead to the [Watcher Installation](/dashboard/watcher.html) section.

## What Larahawk Isn't
There are a lot of PHP and Laravel error monitoring and reporting applications out there currently. **Larahawk isn't feature-packed and doesn't pretend to be.** If you're looking for software to track issues, assign bugs to users, manage database queries, or provide you with a full APM, Larahawk probably isn't for you. You might want to try [Bugsnag](https://bugsnag.com), [Flare](https://flareapp.io), or [Sentry](https://sentry.io) instead.

However, if you're after **log monitoring that's easy to set up and reliable notifications** when your app starts throwing exceptions, you've come to the right place. 

## Requirements
- PHP 7.1 or higher
- Laravel 5.5 or higher
- cURL enabled on your application's server
