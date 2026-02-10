import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, clientAddress }) => {
    const PIXEL_ID = "1873651629941874";
    const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN || import.meta.env.META_ACCESS_TOKEN;
    const TEST_CODE = process.env.META_TEST_EVENT_CODE || import.meta.env.META_TEST_EVENT_CODE;

    if (!ACCESS_TOKEN) {
        return new Response(JSON.stringify({ error: 'Missing Meta Access Token' }), { status: 500 });
    }

    try {
        const body = await request.json();
        const { eventName, eventId, eventSourceUrl, userData = {} } = body;

        const eventData = {
            event_name: eventName,
            event_time: Math.floor(Date.now() / 1000),
            action_source: 'website',
            event_id: eventId,
            event_source_url: eventSourceUrl,
            user_data: {
                client_ip_address: clientAddress,
                client_user_agent: request.headers.get('user-agent'),
                ...userData
            }
        };

        const payload: any = {
            data: [eventData]
        };

        if (TEST_CODE) {
            payload.test_event_code = TEST_CODE;
        }

        const response = await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();

        return new Response(JSON.stringify(result), {
            status: response.ok ? 200 : 400,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
};
