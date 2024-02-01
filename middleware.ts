import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/"],

  // if the user is authenticated
  afterAuth(auth, req) {
    // if user has signed in and is on a public route, redirect to /select-org
    if (auth.userId && auth?.isPublicRoute) {
      let path = "/select-org";

      // if user is a member of only one organization, redirect to that org
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    // if the user is not authenticated, redirect to sign in and then back to the requested page
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // if the user is authenticated, but they don't have an orgId, redirect to /select-org to choose an org or create an org
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
