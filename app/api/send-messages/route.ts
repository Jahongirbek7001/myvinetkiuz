import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

// GET - barcha foydalanuvchilarni olish yoki filtrlash
export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id') // agar id orqali filtr qilmoqchi bo'lsangiz

    let query = supabase.from('sendmessage').select('*').order('id', { ascending: true })

    if (id) {
      query = query.eq('id', id)
    }

    const { data, error } = await query

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

// POST - yangi foydalanuvchini qo'shish
export async function POST(req: NextRequest) {
  const { firstname, lastname, phonenumber } = await req.json();

  try {
    const { data, error } = await supabase
      .from("sendmessage") // 👈 BU YER TO‘G‘RI BO‘LISHI KERAK
      .insert([{ firstname, lastname, phonenumber }])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}


