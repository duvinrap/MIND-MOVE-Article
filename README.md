# MIND MOVE Article — Public Foundation V1

Brand: **MIND MOVE Article**
Footer: **© 2026 MIND MOVE. All Rights Reserved.**

## What V1 does
- Professional responsive landing page
- Discover / featured work
- Artist community roadmap
- Public "Publish your work" page
- Review-first submission endpoint
- Ready for Vercel deployment

## Important
The API currently acknowledges a submission but does **not** permanently store it.
This is intentional: the next build step should add a database + moderation queue + file storage.

Recommended build order:
1. Database + submission records
2. Admin moderation dashboard
3. Artist accounts / profiles
4. Image/cover upload
5. Likes, comments, follows
6. Search + trending algorithm
7. Digital products + store integration
8. Creator earnings / payouts

## Run
npm install
npm run dev

Then open http://localhost:3000

## Deploy
This Next.js project is designed for Vercel. Import the project or connect the Git repository.
