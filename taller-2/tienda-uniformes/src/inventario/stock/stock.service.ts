import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {
  private stock: Stock[] = [];
  private idCounter = 1;

  createStock(dto: CreateStockDto): Stock {
    const nuevoStock: Stock = {
      id: this.idCounter++,
      ...dto,
    };
    this.stock.push(nuevoStock);
    return nuevoStock;
  }

  getAllStock(productoId?: number): Stock[] {
    if (productoId) {
      return this.stock.filter((item) => item.productoId === productoId);
    }
    return this.stock;
  }

  getStockById(id: number): Stock {
    const stock = this.stock.find((item) => item.id === id);
    if (!stock) throw new NotFoundException(`Stock #${id} no encontrado`);
    return stock;
  }

  updateStock(id: number, dto: UpdateStockDto): Stock {
    const stock = this.getStockById(id);
    Object.assign(stock, dto);
    return stock;
  }

  deleteStock(id: number): void {
    const index = this.stock.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Stock #${id} no encontrado`);
    this.stock.splice(index, 1);
  }
}
