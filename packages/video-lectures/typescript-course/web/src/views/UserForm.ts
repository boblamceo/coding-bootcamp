import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
        };
    }

    onSetNameClick = (): void => {
        console.log('helllo from name');

        const input = this.parent.querySelector('input');

        if (input) {
            const name = input.value;

            this.model.set({ name });
        } else {
            throw new Error('no input');
        }
    };

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    };

    template(): string {
        return `
        <div>
          <h1>User Form</h1>
          <div>User name: ${this.model.get('name')}</div>
          <div>User age: ${this.model.get('age')}</div>
          <input />
          <button class="set-name">Change Name</button>
          <button class="set-age">set random age</button>
        </div>
      `;
    }
}
