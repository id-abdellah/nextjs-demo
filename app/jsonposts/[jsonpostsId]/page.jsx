import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default function page({ params }) {

    const loadingJSX = (<div>
        pleas! wait...
    </div>);

    return (
        <div>
            <h3>Post Details === post id :{params.jsonpostsId}</h3>

            <Suspense fallback={loadingJSX}>
                <PostDetails jsonpostId={params.jsonpostsId} />
            </Suspense>
        </div>
    )
}
