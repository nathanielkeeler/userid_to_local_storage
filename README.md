# userid_to_local_storage
This app is to be implemented into Google Tag Manager as Custom Variable.
It is meant to save the Google Click ID of a user, who came onto the tracked site through another site.
The Google Click ID gives Information about where this user is coming from, which is of interest for many companies trying to analyze their marketing data.

The app filters out the ID and stores it into the browsers local storage. Here it can prevail over a long time and finally be fired to the Google Tag Manager, once the user ever decides to accept cookies on the website.

In short: sine many users click away the cookie banners, a lot of information like the gclid are lost. This makes sure that the information normally stored in cookies is now stored into local storage where it can last over multiple sessions. The chance of getting this data is thus higher.
