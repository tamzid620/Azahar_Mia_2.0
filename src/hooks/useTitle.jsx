import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = ` ${title} - Azahar Mia Family `;
    }, [title])
}

export default useTitle;