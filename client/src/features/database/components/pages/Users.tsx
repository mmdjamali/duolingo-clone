import Preact from 'preact'

const Users = () => {
  return (
    <>
        <div
        className={`
        flex
        -center
        `}>
            <h1
            className={`
            text-[1.5rem]
            font-bold
            `}>
                Users
            </h1>

        </div>

        <div
        className={`
        grid
        grid-cols-[repeat(auto-fill,minmax(160px,1fr))]
        h-full
        w-full
        justify-start
        place-items-stretch
        gap-3
        `}>
        </div>

    </>
  )
}

export default Users