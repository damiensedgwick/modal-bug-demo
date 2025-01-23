# Expo Modal Bug Demo (Maybe Not A Bug 🤷‍♂️)

I recently went through this course on Frontend Masters: https://kadikraman.github.io/intermediate-react-native-v2-course/ and whilst following along I noticed a difference in behaviour between my app, and the app being presented by Kadi. When I clicked to save a new plant, rather than going back to the home screen, a new modal would popup with the home screens content. This happens indefinitely.

After updating my Expo version this morning, I noticed this behaviour had returned in the app I had been building so I created this project from scratch to see if I could reproduce it and I can, see video.

The behaviour can be seen when using `router.push()` or `router.navigate()` but not `router.back()` so I thought that maybe in the course, `router.back()` might have been used but upon checking, it is `router.navigate()` that is used.

So I am unsure if this is a bug in the new Expo SDK or if this is new and intended behaviour.

https://github.com/user-attachments/assets/68d7059e-e3ab-4563-8894-42b4f5112e15

