import { redirect, fail } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';

// export function load({ cookies }) {
//     if (cookies.get('logged_in')) {
//         throw redirect(307, '/account');
//     }
// }

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        if (data.get('passphrase') === PASSPHRASE) {
            cookies.set('logged_in', 'true', {
                path: '/'
            });

            throw redirect(303, '/');
        }

        return fail(403, {
            incorrect: true
        });
    }
};
