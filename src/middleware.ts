import { withAuth } from '@kinde-oss/kinde-auth-nextjs/middleware';
import { NextRequest } from 'next/server';

// * This middleware is used to protect all routes in the application
//  *and redirect users to the login page if they are not authenticated.
export default withAuth(
  async function middleware(request: NextRequest) {
    //console.log(request);
  },
  { isReturnedToCurrentPage: true }
);

// * This config is used to match all routes except for the ones specified in the matcher array.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico | robots.txt | images | login|$).*)',
  ],
};
