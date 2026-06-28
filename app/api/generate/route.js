
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    try {
        const body = await request.json();
        
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");
        
        const doc = await collection.findOne({
            shorturl: body.shorturl
        });
        console.log(doc);
        
        if (doc) {
            return Response.json(
                {
                    success: false,
                    error: true,
                    message: "URL already exists!"
                },
                { status: 409 }
            );
        }
        
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        });
        // console.log(shorturl);
        
        return Response.json(
            {
                success: true,
                error: false,
                message: "URL generated successfully."
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                success: false,
                error: true,
                message: "Internal Server Error"
            },
            { status: 500 }
        );
    }
}