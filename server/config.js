//Nastavení cesty pro vrácení přiděleného tokenu
export const callbackURL
    = process.env.FORGE_CALLBACK_URL || 'http://localhost:3030/api/forge/callback/oauth';

//Nastavení přístupových údajů do Forge APP
export const credentials
    = {
    client_id: process.env.FORGEClient_ID || 'ET3t9fEvOyCOJkcjbS2U1Y6PGzQOtwf1',
    client_secret: process.env.FORGE_CLIENT_SECRET || 'GItbIUFkjI6nlVVf'
};

// Required scopes for your application on server-side
export const scopeInternal
    = ['data:read', 'data:write', 'data:create', 'data:search',
        'bucket:create', 'bucket:read', 'bucket:update', 'bucket:delete'],

// Required scope of the token sent to the client
export const scopePublic = ['viewables:read'];

