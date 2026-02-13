import { stripeWebhookHandler } from '@documenso/ee/server-only/stripe/webhook/handler';

import type { Route } from './+types/webhook.trigger';

export function loader() {
  return new Response('Stripe webhook endpoint is active. Use POST to send events.', {
    status: 200,
  });
}

export async function action({ request }: Route.ActionArgs) {
  return await stripeWebhookHandler(request);
}
