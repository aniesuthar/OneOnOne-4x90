import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'

export default function ServiceForm() {
    return (
        <div className='bg-primary'>\
            <h2 className='text-white/60'>Get Started with a Free Consult</h2>

            <span>
                <Checkbox id="careMyself"/>
                <Label htmlFor="careMyself">I'm seeking home care for myself or a loved one.</Label>
            </span>
            <span>
                <Checkbox id="career"/>
                <Label htmlFor="career">I'm seeking a career in home care.</Label>
            </span>

        </div>
    )
}
