# Events
![Screenshot of Larahawk events](/larahawk-events-screenshot.png)

Events are recorded whenever your application saves something to the log. You can have events for exceptions thrown, PHP warnings, or even manual `Log::info()` entries.

Whenever those are fired on your application, a request is made with your property's API key to Larahawk, and the event and its details are recorded. Depending on the levels set in your [config file](/dashboard/configuration.html), notifications are sent out immediately to the channels you have activated in your account.

Clicking on an individual event will take you to a page that contains the following details:

- Method + Path
- Message
- Event Type *(e.g. error, warning, debug, info)*
- Datetime Occurred
- Notified Via *(the notification channels we sent out alerts to)*
- User Info *(if an Auth::user is present)*
- Device
- OS
- Browser
- IP Address
- Full stack trace

