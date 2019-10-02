# Configuration

The configuration file for Larahawk is located at `config/larahawk.php`. Each item is broken down and described in the comment lines above it, detailing what it does and what value(s) it might be anticipating.

There is currently only one configuration item for Larahawk.

### logLevelsWatched

- Type: `array`
- Default: `['emergency', 'alert', 'critical', 'error', warning']`

An array of Laravel log levels that will fire off an event to Larahawk if matched to a log entry. All possible values are as follow:

- emergency
- alert
- critical
- error
- warning
- notice
- info
- debug