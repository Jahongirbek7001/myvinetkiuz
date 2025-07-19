import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

export async function GET(req: NextRequest) {
    try {
        const { data, error } = await supabase
            .from('vinetka')
            .select('*') // Barcha ma’lumotlar olinadi, hech qanday filter yo‘q

        if (error) {
            console.error(error)
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json(data)
    } catch (error) {
        console.error(error)
        return new NextResponse('Server Error', { status: 500 })
    }
}
