import { useEffect, UseFetch, useState } from 'react'
import { get } from './ui/components/TableCard/asyncData'

export const UseFetch = () => {
    const [state, setState] = useState({ data: [], loading: true });

    useEffect(() => {
        get('http://localhost:8000/server/summary/report', {}).then(data => {
            console.log(data);
            setState({
                data,
                loading: false
            })
        });
    }[]);
    return state
}


export default UseFetch