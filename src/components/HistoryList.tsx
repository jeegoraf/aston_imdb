import PropTypes, { type InferProps } from 'prop-types'
import { useNavigate } from 'react-router-dom'

export function HistoryList({
  data,
}: InferProps<typeof HistoryList.propTypes>) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-3 pt-3 px-40">
      {data?.map((item: string) => {
        return (
          <button
            onClick={() => {
              navigate(item)
            }}
            className="bg-gray h-14 text-center align-center rounded-xl text-xl"
            key={item}
          >
            {item}
          </button>
        )
      })}
    </div>
  )
}

HistoryList.propTypes = {
  data: PropTypes.array,
}
