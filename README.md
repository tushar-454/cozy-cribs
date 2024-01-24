# Cozy-Cribs house renter web app.

কিছু সমস্যা কারনে ভার্সেল এ সার্ভার টা ডেপ্লয় করতে পারি নি।

লোকালি রান করার জন্য।

client folder এবং server folder `yarn` দিয়ে ডিপেন্ডেন্সি ইন্সটল করতে হবে।

তার পর সার্ভারটিকে `yarn start` দিয়ে রান করতে হবে কারন আমি সার্ভার টি ডিপ্লয় করতে পারি নি।

সার্ভার এ একটি `.env` ফাইল নিতে হবে সেখানে

```
PORT=5000
URI=mongodb+srv://<username>:<password>@cozy-cribs.nyyuixu.mongodb.net/cozy-cribs?retryWrites=true&w=majority
TOKEN_SECRET=46d587c92aa789becbcf231fde38a2c3014aab4612603b667798ce03cb8e6cf42521172443c02700b1bb9d05d99f33d18ea7ccfac8c57dd3fcc5984a5c6be47f
```

এখানে ইউজার এবং পাসওয়ার্ড বসাতে হবে।
