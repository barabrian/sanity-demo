import React, { useEffect } from 'react'
import { ObjectInputProps, set, unset } from 'sanity'
import { useFetch } from 'usehooks-ts'
import { Select, Card, Spinner, Text } from '@sanity/ui'
import ImageWindow from '@/cmp/ImageWindow.tsx/ImageWindow'
import { Tix } from '@/app/api/tix/route'

const url = '/api/tix'
const cardProps = { shadow: 1, padding: 3, radius: 2 }

export default function TixSelect(props: ObjectInputProps) {
  // The onChange handler can write new changes to the field
  const { onChange, value, id } = props
  const { data, error } = useFetch<Tix[]>(url)
  const [selected, setSelected] = React.useState('0')

  useEffect(() => {
    if (data) {
      const initialIdx = data?.findIndex(
        (item) => item?.FeaturedImagePath === value?.featured
      )

      setSelected(initialIdx >= 0 ? initialIdx?.toString() : '0')
    }
  }, [data])

  // This function will run each time the select menu is used
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const idx = event?.currentTarget.value
    setSelected(idx)

    const current = data?.[Number(idx)]
    console.log(idx, current)
    if (!current) return
    onChange(
      current
        ? set({
            _key: idx,
            featured: current.FeaturedImagePath,
            name: current.Name,
          })
        : unset()
    )
  }

  if (error)
    return (
      <Card tone="critical" {...cardProps}>
        <Text>There has been an error</Text>
      </Card>
    )

  if (!data)
    return (
      <Card tone="default" {...cardProps}>
        <Spinner />
      </Card>
    )

  return (
    <>
      <Select onChange={handleChange} value={selected}>
        {data.map((item, idx) => (
          <option key={idx} value={idx}>
            {item.Name}
          </option>
        ))}
      </Select>
      {value && (
        <div style={{ padding: 30, width: 350 }}>
          <ImageWindow
            img={data?.[Number(selected)]?.FeaturedImagePath ?? ''}
          />
        </div>
      )}
    </>
  )
}
