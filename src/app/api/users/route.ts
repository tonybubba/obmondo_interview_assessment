import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
	const page = req.nextUrl.searchParams.get('page');

	if (!page) {
		return NextResponse.json(
			{ error: 'Page parameter is required' },
			{ status: 400 }
		);
	}
	if (!/^\d+$/.test(page)) {
		return NextResponse.json(
			{ error: 'Invalid page parameter' },
			{ status: 400 }
		);
	}

	try {
		const response = await fetch(`${process.env.API_URL}/users/${page}/next`);

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Failed to fetch users. ${errorText}`);
		}
		const data = await response.json();
		return NextResponse.json(data, { status: 200 });
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : 'Unknown error occured';
		console.error('Api Error:', errorMessage);
		return NextResponse.json({ error: errorMessage }, { status: 500 });
	}
}
