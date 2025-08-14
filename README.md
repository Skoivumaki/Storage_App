## Introduction

Admin Dashboard app for use with storage related information.

App avaiable here (updated 14.8.2025, vercel may take upto 2 minutes to start) [https://storage-app-henna.vercel.app/](https://storage-app-henna.vercel.app/)
![image](https://github.com/Skoivumaki/varasto_app/assets/123396118/0f2fc5b9-3db4-4ebc-8dea-e387a803133d)
<img width="1267" height="1294" alt="image" src="https://github.com/user-attachments/assets/3b79544c-2987-483e-b4b9-7efc364abed7" />

Most used dependencies:
Next.js 13
Typescript
Clerk
TailwindCSS
MongoDB & Zod

To Run
Note: Running locally requires following enviroments `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` and `MONGODB_URL`. All of which are free to use, but require some time to setup. For a quick preview see Vercel app.
```bash
npm run dev
# or
npm run build
npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.

For Postman API routes to work add routes to ignoredRoutes. See middleware.ts:7
