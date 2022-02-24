const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path*",
        destination: "/form/:path*",
        permanent: false, // true일경우에는 브라우저나 검색엔진이 이 정보를 기억한다.
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
      },
    ];
  },
};
