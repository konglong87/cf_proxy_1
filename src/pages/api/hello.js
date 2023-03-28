// /api/hello
async function handler(req) {
  return new Response(
    JSON.stringify({
      name: '孙师傅驮着恐龙🦖',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}

export const config = {
  runtime: 'edge',
};

export default handler;
