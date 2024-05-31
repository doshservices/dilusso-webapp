import { SelectCountry } from "../SelectDropdown/Country"
import { deliveryInputStyle, deliveryLabelStyle } from '../../resources/inputStyles'

export const DeliveryAddress = () => {
    return (
        <section>
            <h2 className="font-medium font-outfit text-[1.25rem] sm:text-[1.8rem] md:text-[2.2rem] my-6">
                Add your delivery address
            </h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="sm:grid grid-cols-[1fr_1fr] gap-4">
                    <div className="mb-6">
                        <label htmlFor="firstName" className={deliveryLabelStyle}>First name</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            className={deliveryInputStyle}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className={deliveryLabelStyle}>Last name</label>
                        <input
                            id='lastName'
                            type="text"
                            name="lastName"
                            className={deliveryInputStyle}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="deliveryAddress" className={deliveryLabelStyle}>Delivery address</label>
                    <input
                        id="deliveryAddress"
                        type="text"
                        name="deliveryAddress"
                        className={deliveryInputStyle}
                    />
                </div>
                <div className="sm:grid grid-cols-[1fr_1fr] gap-4">
                    <div>
                        <label htmlFor="country" className={deliveryLabelStyle}>Country</label>
                        <SelectCountry />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="city" className={deliveryLabelStyle}>City</label>
                        <input
                            id="city"
                            name="city"
                            type="text"
                            className={deliveryInputStyle}
                        />
                    </div>

                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className={deliveryLabelStyle}>Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+234"
                        className={deliveryInputStyle}
                    />
                </div>
            </form>
        </section>
    )
}