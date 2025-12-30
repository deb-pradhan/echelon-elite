# Sanity CMS Setup Guide

This project uses Sanity CMS for content management. Follow these steps to set up Sanity for your project.

## Prerequisites

- Node.js 18+ installed
- A Sanity.io account (free at [sanity.io](https://sanity.io))

## Setup Steps

### 1. Create a Sanity Project

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Click "Create new project"
3. Name it "Echelon Elite" (or your preferred name)
4. Choose the "Clean project with no predefined schemas" option
5. Select your preferred dataset name (default: "production")
6. Note your **Project ID** from the project dashboard

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Required
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production

# Optional (needed for seed script)
SANITY_API_TOKEN=your_write_token_here
```

### 3. Add CORS Origin

1. Go to [sanity.io/manage](https://sanity.io/manage) > Your Project > API > CORS origins
2. Add your development URL: `http://localhost:3000`
3. Add your production URL when deployed

### 4. (Optional) Seed Initial Data

To populate Sanity with sample data:

1. Create an API token with **Editor** permissions:
   - Go to sanity.io/manage > Your Project > API > Tokens
   - Click "Add API token"
   - Name it "Seed Script"
   - Select "Editor" permissions
   - Copy the token to your `.env.local` as `SANITY_API_TOKEN`

2. Run the seed script:
   ```bash
   npm run seed
   ```

3. Add images manually in Sanity Studio at `/studio`

### 5. Access Sanity Studio

Once configured, access the admin interface at:
- Development: `http://localhost:3000/studio`
- Production: `https://yourdomain.com/studio`

## Content Structure

### Properties
- Title, Slug, Location
- Price (number) and Price Display (formatted string)
- Images (array)
- Developer (reference)
- Community (reference)
- Bedrooms, Size
- Status (available/sold/off-plan)
- Property Type
- Golden Visa Eligible
- Featured (shows on homepage)

### Developers
- Name, Slug, Logo
- Tagline, Description
- Hero Image
- Key Projects (array)
- Established Year
- Key Highlight

### Communities
- Name, Slug
- Description
- Image
- Average ROI
- Featured (shows on homepage)
- Display Order

## Usage

### Adding Content

1. Go to `/studio`
2. Log in with your Sanity account
3. Click on "Properties", "Developers", or "Communities"
4. Click "Create new" to add content
5. Fill in the fields and click "Publish"

Changes appear on the website immediately (or after revalidation in production).

### Team Access

To invite team members:
1. Go to sanity.io/manage > Your Project > Members
2. Click "Invite member"
3. Enter their email and select role (Editor recommended)

## Fallback Behavior

If Sanity is not configured or returns no data, the site displays hardcoded fallback content. This ensures the site works during development without Sanity setup.

## Troubleshooting

### "Could not resolve module" errors
Ensure all dependencies are installed:
```bash
npm install
```

### Studio not loading
Check that your project ID is correct in `.env.local` and CORS origins are configured.

### Images not showing
- Ensure `cdn.sanity.io` is in your Next.js image domains (already configured in `next.config.ts`)
- Upload images through Sanity Studio, don't use external URLs

### Seed script failing
- Verify `SANITY_API_TOKEN` is set with write permissions
- Check project ID and dataset name are correct

