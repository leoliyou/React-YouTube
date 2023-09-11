import Comment from "./Comment"
function Comments() {
    const commentsData = [
        { creator: "Alex", comment: "Great video", likeCount: 3 },
        { creator: "Liu", comment: "Good video", likeCount: 10 },
        { creator: "Li", comment: "Poor video", likeCount: 90 },
    ];
    return (
        <div className="comments">
            {commentsData.map((comment) => {
                return (
                    <Comment comment={comment } />
                )
            }
            )}
        </div>

    )
}

export default Comments;