export default async function handler(req, res) {
    console.log("revalidating");
    let revalidated = false;
    try {
        await res.unstable_revalidate('/categories');
        revalidated = true;
    }
    catch (err) {
        console.log(err);
    }
    res.json({revalidated});
}