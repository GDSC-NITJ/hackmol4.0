import React, { useEffect, useState } from 'react'

function PostWall() {
    
    const [posts, setPosts] = useState([])
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)



    const getPosts = async () => {
        let url ;
        setLoading(true)
        if(process.env.NODE_ENV === 'development'){
            url = `http://localhost:3000/api/post?page=1&limit=10`
        }else{
            url = `https://hackmol.tech/api/post?page=1&limit=10`
        }

        const res = await fetch(url)
        const data = await res.json()

        setPosts(data.posts)
        setLoading(false)
        console.log(data)
    }


    useEffect(() => {
        getPosts()
    }, [])

  return (
    <div className='flex flex-wrap gap-10  mt-10' >
        {posts && posts.map((post) => (
            <div key={post.id} className='' >
                <div dangerouslySetInnerHTML={{ __html: post.frame }} />
                </div>
        ))}

    </div>
  )
}

export default PostWall


// get server side props
