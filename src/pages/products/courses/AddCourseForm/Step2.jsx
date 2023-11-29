import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import ImageField from '../../../../components/imageField/ImageField'
import { useEffect, useState } from 'react'
import PaidMethod from '../../../../components/paidMethod/PaidMethod'
import { getCategories } from '../../../../api/course'

/* eslint-disable react/prop-types */
export default function Step2({
  step = 2,
  onSelectImage = () => {},
  pricingType = 'FREE',
  onChangePricingType = () => {},
  price = 0,
  onChangePrice = () => {},
  category = 1,
  onChangeCategory = () => {},
}) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories()

      setCategories(res.data)
    }
    fetchCategories()
  }, [])

  return (
    step === 2 && (
      <>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <Typography
              id="add-course-form-image"
              component="label"
              variant="h6"
            >
              Customize your course&apos;s appearance
            </Typography>
            <ImageField isVertical={false} setImageAsset={onSelectImage} />
          </div>
          <div className="flex justify-between gap-8 flex-col md:flex-row">
            <div className="flex flex-col gap-4 w-1/2">
              <Typography
                id="add-course-form-pricing-type"
                component="label"
                variant="h6"
              >
                Price your course
              </Typography>

              <PaidMethod
                price={price}
                onChangePrice={onChangePrice}
                onChangePricingType={onChangePricingType}
                pricingType={pricingType}
              />
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <Typography
                id="add-course-form-category"
                component="label"
                variant="h6"
              >
                Choose the category
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Categories"
                  onChange={onChangeCategory}
                >
                  {categories.map(category => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </>
    )
  )
}
