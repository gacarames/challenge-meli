import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import Breadcrumb from '../../components/Breadcrumb';
import { Section, Column } from '../../layout';
import Image from '../../components/Image';
import Resume from '../../components/Resume/Resume';
import Button from '../../components/Button';
import Description from '../../components/Description';
import './Product.scss';

function DetailProduct(props) {
    const { item, isLoading, error, fetchProduct } = props;

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    function handleSubmit(event) {
        history.push(`/items/checkout`);
        event.preventDefault();
    }

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        console.log(error);
    }

    return (
        <>
            <Section>
                <Breadcrumb category={item.category} />
            </Section>

            <Section section='detail' styled='card' layout='two-cols'>
                <Column>
                    <Image picture={item.picture} />
                </Column>

                <Column>
                    <div className='product__resume'>
                        <Resume
                            resume={{
                                condition: item.condition,
                                title: item.title,
                                price: item.price,
                                free_shipping: item.free_shipping,
                                sold_quantity: item.sold_quantity,
                            }}
                        />
                        <form onSubmit={handleSubmit}>
                            <Button styleButton='primary' fullWidth>
                                Comprar
                            </Button>
                        </form>
                    </div>
                </Column>
                <Column>
                    <div className='product__description'>
                        <Description content={item.description} />
                    </div>
                </Column>
            </Section>
        </>
    );
}

export default DetailProduct;
