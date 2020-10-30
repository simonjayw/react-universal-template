import { useEffect } from 'react'

const useEffectOnce = effect => {
  useEffect(() => {
    effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useEffectOnce
