import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_SERVICE_ROLE_API_KEY;

type Invitations = {
    invited_by_invitation_id: number;
    value: string;
    used_by_wallet: string;
    created_at: Date;
    updated_at: Date;
};

type Reservations = {
    value: string;
    token_id: number;
    used_by_wallet: string;
    created_at: Date;
    updated_at: Date;
};

export class SupabaseManager<T> {
    private client: SupabaseClient;

    constructor() {
        this.client = createClient(SUPABASE_URL!, SUPABASE_API_KEY!);
    }

    async store(data: T, tableName: string) {
        try {
            const { error } = await this.client
                .from(tableName)
                .insert([data]);

            if (error) throw error;

            console.log('Data successfully added to', tableName);
        } catch (error) {
            console.error("Error adding data:", error);
        }
    }

    async storeMultiple(data: T[], tableName: string) {
        try {
            const { error } = await this.client
                .from(tableName)
                .insert(data);

            if (error) throw error;

            console.log('Data successfully added to', tableName);
        } catch (error) {
            console.error("Error adding data:", error);
        }
    }
}
